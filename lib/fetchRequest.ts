export const useFetch = async (url: string) => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_API + url);
  const result = await res.json();
  return result;
};
