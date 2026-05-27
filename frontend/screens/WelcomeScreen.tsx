import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-background" style={{ paddingBottom: insets.bottom }}>
      {/* Background Gradients & Scanlines */}
      <View className="absolute inset-0 bg-surface-container-lowest/80" />
      
      {/* Top AppBar */}
      <View 
        className="w-full flex-row justify-center items-center px-margin bg-surface/10 border-b border-outline-variant/10 z-50"
        style={{ paddingTop: insets.top + 16, paddingBottom: 16 }}
      >
        <Text className="font-headline-lg text-[28px] font-extrabold tracking-tighter text-primary-fixed-dim">
          QUANTUM TRADE
        </Text>
      </View>

      <View className="flex-1 w-full items-center justify-evenly px-margin relative z-10">
        
        {/* Centerpiece: 3D Orb Image */}
        <View className="relative w-56 h-56 flex items-center justify-center mt-4">
          <View className="absolute top-0 left-0 w-8 h-8 border-t-[0.5px] border-l-[0.5px] border-secondary-fixed-dim/40 rounded-tl-sm" />
          <View className="absolute top-0 right-0 w-8 h-8 border-t-[0.5px] border-r-[0.5px] border-secondary-fixed-dim/40 rounded-tr-sm" />
          <View className="absolute bottom-0 left-0 w-8 h-8 border-b-[0.5px] border-l-[0.5px] border-secondary-fixed-dim/40 rounded-bl-sm" />
          <View className="absolute bottom-0 right-0 w-8 h-8 border-b-[0.5px] border-r-[0.5px] border-secondary-fixed-dim/40 rounded-br-sm" />

          <View className="w-full h-full rounded-full bg-surface-container-high/30 border border-secondary-fixed-dim/20 items-center justify-center overflow-hidden">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Uj3qZ8zlPprvUCM0wyB-0Uteeud30zUgPaWOOA-MzpDinetK8XgV5Zxngb8UJSYjGpFAMH68uis0qmTPwnoFkaG5EKbjQbJK_eIg6jS9SnOeMMUtpLMEGEpHczelPqOJ1V53DuqGrVJWFx0tmY9WbunC-qauaJl_BOGhGdypkJZRXGJS1FESiyPmy2xiUFNVLcy6MDXGXbwj3wagh6AbCbLAjiu5-1F6wyZ51evjLT76KwavruMTzSu-iDRJ7LSHGWnTfuaYkV5c' }}
              className="w-full h-full opacity-80"
              resizeMode="cover"
            />
          </View>

          {/* Orbiting Data Chip */}
          <View className="absolute top-1/4 -right-2 bg-surface-dim/80 border border-primary-fixed-dim/30 rounded-full px-2 py-1 flex-row items-center gap-x-1.5">
            <View className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim" />
            <Text className="font-data-mono text-[10px] text-primary-fixed-dim">SYS.ONLINE</Text>
          </View>
        </View>

        {/* Typography */}
        <View className="items-center w-full">
          <Text className="font-display-lg text-[28px] leading-[36px] text-on-surface tracking-tighter text-center mb-3">
            The Future of Indian Markets is{'\n'}
            <Text className="text-secondary-fixed-dim">Autonomously Intelligent.</Text>
          </Text>
          <Text className="font-body-md text-on-surface-variant text-center max-w-[95%]">
            Quantum Trade synthesizes global institutional data streams into actionable intelligence. Prepare to initialize your tactical command center.
          </Text>
        </View>

        {/* Action Area */}
        <View className="w-full max-w-[320px] flex-col gap-y-3 mb-4">
          <TouchableOpacity className="w-full bg-primary-container py-3.5 rounded-lg items-center justify-center">
            <Text className="text-on-primary-fixed font-label-caps text-label-caps font-bold">
              INITIALIZE COMMAND
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="w-full bg-surface-container-high/50 border border-secondary-fixed-dim/30 py-3.5 rounded-lg items-center justify-center">
            <Text className="text-secondary-fixed-dim font-label-caps text-label-caps font-bold">
              EXPLORE ECOSYSTEM
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Progress Indicator */}
      <View className="w-full px-margin py-6 flex-row items-center justify-between gap-x-2">
        <Text className="font-data-mono text-[10px] text-primary-fixed-dim">SEQ_01</Text>
        <View className="flex-1 h-[2px] bg-primary-fixed-dim" />
        <View className="flex-1 h-[2px] bg-surface-variant/50" />
        <View className="flex-1 h-[2px] bg-surface-variant/50" />
        <View className="flex-1 h-[2px] bg-surface-variant/50" />
        <Text className="font-data-mono text-[10px] text-on-surface-variant/50">SEQ_04</Text>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
