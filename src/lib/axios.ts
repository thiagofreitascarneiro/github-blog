import axios from "axios"


export interface GithubUserData {
    name: string;
    avatar_url: string;
    bio: string;
    company: string;
    followers: number;
    login: string;
  }

  export const authToken = "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";
  export const headers = {
  Authorization: `token ${authToken}`,
  };

  export async function getUser(username: string): Promise<GithubUserData> {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, {headers});
      return response.data;
      
    } catch (error) {
      console.error(error);
      throw error;
    }  
  }