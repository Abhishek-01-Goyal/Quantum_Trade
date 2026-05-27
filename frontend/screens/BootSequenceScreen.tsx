import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function BootSequenceScreen({ navigation }: any) {
  const [progress, setProgress] = useState(0);
  const [syncStatus, setSyncStatus] = useState(98);
  const [activeSequences, setActiveSequences] = useState<number>(0);

  useEffect(() => {
    // Sequence Texts Animation
    const seqTimeouts = [
      setTimeout(() => setActiveSequences(1), 800),
      setTimeout(() => setActiveSequences(2), 1600),
      setTimeout(() => setActiveSequences(3), 2400),
      setTimeout(() => setActiveSequences(4), 3200),
    ];

    // Progress Bar Animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 5 + 1;
        const next = prev + increment;
        if (next > 80 && Math.random() > 0.7) {
          setSyncStatus(98 + Math.floor(Math.random() * 2));
        }
        if (next >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            navigation.replace('Welcome');
          }, 800); // Small delay before navigating
          return 100;
        }
        return next;
      });
    }, 50);

    return () => {
      seqTimeouts.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, [navigation]);

  return (
    <View className="flex-1 bg-background items-center justify-center relative overflow-hidden">
      {/* Background Gradients & Scanlines will be added as absolute elements */}
      <View className="absolute inset-0 bg-surface-container-highest/20" />
      
      <View className="z-20 flex-col items-center w-full max-w-2xl px-margin relative">
        <View className="mb-xl text-center relative items-center justify-center">
          <Text className="font-display-lg text-display-lg font-bold tracking-tighter text-primary-fixed-dim">
            QUANTUM TRADE
          </Text>
          <View className="h-[1px] w-full bg-secondary-fixed-dim/50 mt-xs" />
        </View>

        {/* Terminal Window */}
        <View className="w-full bg-surface-dim/80 border border-secondary-container/10 rounded-lg p-margin mb-lg relative overflow-hidden">
          <View className="flex-col gap-y-xs">
            <View className="flex-row items-center justify-between">
              <Text className="font-data-mono text-data-mono text-secondary-fixed-dim/80">
                <Text className="text-outline mr-xs">{'> '}</Text>
                INITIALIZING_QUANTUM_CORE...
              </Text>
              <Text className="font-data-mono text-data-mono text-primary-fixed-dim">[OK]</Text>
            </View>

            {activeSequences >= 1 && (
              <View className="flex-row items-center justify-between">
                <Text className="font-data-mono text-data-mono text-secondary-fixed-dim/80">
                  <Text className="text-outline mr-xs">{'> '}</Text>
                  ESTABLISHING_NEURAL_LINK...
                </Text>
                <Text className="font-data-mono text-data-mono text-primary-fixed-dim">[OK]</Text>
              </View>
            )}

            {activeSequences >= 2 && (
              <View className="flex-row items-center justify-between">
                <Text className="font-data-mono text-data-mono text-secondary-fixed-dim/80">
                  <Text className="text-outline mr-xs">{'> '}</Text>
                  LOADING_MARKET_DATA_STREAM...
                </Text>
                <Text className="font-data-mono text-data-mono text-primary-fixed-dim">[OK]</Text>
              </View>
            )}

            {activeSequences >= 3 && (
              <View className="flex-row items-center">
                <Text className="font-data-mono text-data-mono text-secondary-fixed-dim/80">
                  <Text className="text-outline mr-xs">{'> '}</Text>
                  <Text className="text-on-surface">CORE_ENGINE: ACTIVE</Text>
                </Text>
              </View>
            )}

            {activeSequences >= 4 && (
              <View className="flex-row items-center mt-sm">
                <Text className="font-data-mono text-data-mono text-secondary-fixed-dim/80">
                  <Text className="text-outline mr-xs">{'> '}</Text>
                  <Text className="text-primary-fixed-dim">AWAITING_OPERATOR_INPUT_</Text>
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Loading Bar */}
        <View className="w-full flex-col items-center">
          <View className="flex-row justify-between w-full mb-xs">
            <Text className="font-label-caps text-label-caps text-on-surface-variant">
              SYSTEM_BOOT
            </Text>
            <Text className="font-label-caps text-label-caps text-secondary-fixed-dim">
              {Math.floor(progress)}%
            </Text>
          </View>
          <View className="w-full h-1 bg-surface-variant/50 rounded-full overflow-hidden">
            <View 
              className="h-full bg-primary-fixed-dim" 
              style={{ width: `${progress}%` }} 
            />
          </View>
          <Text className="mt-xs font-data-mono text-[10px] text-outline/50 uppercase tracking-widest">
            SECURE CONNECTION ESTABLISHED
          </Text>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
