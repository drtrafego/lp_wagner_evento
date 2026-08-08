"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense, useRef } from "react";
import type { Group } from "three";

/**
 * Camada de partículas discretas (poeira/brasa subindo devagar), sem mesh
 * solida protagonista. Duas camadas: brasa vermelha e um traço branco fraco
 * pra dar profundidade sem virar "bola" no centro do hero.
 */
function EmberDust({ mobile, reduced }: { mobile: boolean; reduced: boolean }) {
  return (
    <>
      <Sparkles
        count={mobile ? 45 : 180}
        scale={[10, 6, 5]}
        size={mobile ? 1.6 : 2.2}
        speed={reduced ? 0 : 0.25}
        color="#C40000"
        opacity={0.65}
      />
      <Sparkles
        count={mobile ? 20 : 70}
        scale={[11, 5, 6]}
        size={mobile ? 1 : 1.3}
        speed={reduced ? 0 : 0.12}
        color="#FFFFFF"
        opacity={0.22}
      />
    </>
  );
}

/**
 * Geometria 3D discreta e secundária, so contorno (wireframe fino, nunca
 * preenchida), deslocada pro canto, girando muito devagar. Fica atras do
 * texto, quase subliminar, nunca domina a composicao.
 */
function GhostWireframe({ reduced }: { reduced: boolean }) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current || reduced) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.05;
    ref.current.rotation.x = t * 0.03;
  });

  return (
    <group ref={ref} position={[2.8, 0.4, -2]} scale={0.9}>
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#B21E2C" wireframe transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

type Props = {
  mobile?: boolean;
  reduced?: boolean;
};

export function HeroScene({ mobile = false, reduced = false }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <Suspense fallback={null}>
        <EmberDust mobile={mobile} reduced={reduced} />
        <GhostWireframe reduced={reduced} />
      </Suspense>
      {!mobile && !reduced ? (
        <EffectComposer>
          {/* threshold alto: bloom acende so os pontos de luz das particulas,
              nunca inunda a cena inteira */}
          <Bloom intensity={0.5} luminanceThreshold={0.92} luminanceSmoothing={0.35} mipmapBlur />
        </EffectComposer>
      ) : null}
    </Canvas>
  );
}
