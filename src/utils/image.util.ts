export const dynamicBlurDataUrl = async (url: string) => {
  try {
    const base64str = await fetch(
      `http://localhost:3000/_next/image?url=${url}&w=1920&q=60`
    ).then(async (res) => {
        Buffer.from(await res.arrayBuffer()).toString('base64');
    });
    return;
  } catch (error) {
    console.error(`Error fetching blurred ${url} image:`, error);
    return '';
  }
};
