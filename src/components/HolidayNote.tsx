import { StyleSheet, Text } from 'react-native';
import { useHolidays } from '../hooks/useHolidays';

interface HolidayNoteProps {
  date: string;
}

export function HolidayNote({ date }: HolidayNoteProps) {
  const year = Number(date.slice(0, 4));
  const { data, isPending, isError } = useHolidays(year);

  if (isPending) {
    return <Text style={styles.note}>Checking holidays</Text>;
  }

  if (isError) {
    return <Text style={styles.note}>Holidays unavailable</Text>;
  }

  const holiday = data.find((item) => item.date === date);

  if (holiday) {
    return <Text style={styles.holiday}>Public holiday: {holiday.name}</Text>;
  }

  return <Text style={styles.note}>Not a public holiday</Text>;
}

const styles = StyleSheet.create({
  note: {
    fontSize: 15,
    color: '#666',
    marginBottom: 10,
  },
  holiday: {
    fontSize: 15,
    fontWeight: '600',
    color: '#16a34a',
    marginBottom: 10,
  },
});