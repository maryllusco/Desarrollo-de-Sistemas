import { Pressable, Text } from 'react-native';

export function BotonAgregarAlCarrito({
  texto,
  onPress,
}: {
  texto: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={{ backgroundColor: '#1e90ff', padding: 10, borderRadius: 8 }}>
      <Text style={{ color: 'white' }}>{texto}</Text>
    </Pressable>
  );
}