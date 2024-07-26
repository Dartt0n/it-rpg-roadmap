'use client';

export function prefixToColor(prefix: string): string {
  if (prefix === 'Intern') {
    return '#fefefe';
  }

  if (prefix === 'Junior') {
    return '#2bf5c3'
  }

  if (prefix === 'Middle') {
    return '#ea6eeb'
  }

  if (prefix === 'Senior') {
    return '#eaa15d'
  }

  if (prefix === 'CEO') {
    return '#ff4040'
  }

  return '#fefefe';
}
