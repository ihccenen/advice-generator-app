export default async function getAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice', {
    cache: 'no-store',
  });

  if (!res.ok) return undefined;

  return res.json();
}
