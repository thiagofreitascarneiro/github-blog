import axios from "axios"


export interface GithubUserData {
    name: string;
    avatar_url: string;
    bio: string;
    company: string;
    followers: number;
    login: string;
  }

  export async function getUser(username: string): Promise<GithubUserData> {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
      
    } catch (error) {
      console.error(error);
      throw error;
    }  
  }