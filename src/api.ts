interface Image {
  id: number;
  webformatURL: string;
  likes: number;
  views: number;
}

const API_KEY = "43766356-6392b81c860f56e56065cb607";
const API_URL = `https://pixabay.com/api/?key=${API_KEY}&per_page=20`;

const fetchImages = async (): Promise<Image[]> => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

export default fetchImages;
