import { FormEvent } from 'react';

export function extractValueFor(func: (value: string) => any) {
  return (event: FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    return func(event.currentTarget.value);
  };
}
