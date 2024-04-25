import axios from 'axios';

export async function deleteResourceWithToken(url: string, token: string): Promise<void> {
    const config = {
        headers: { 'Authorization': `Bearer token` }
    };
    try {
        const response = await axios.delete(url, config);
        console.log('Resource deleted successfully:', response.data);
    } catch (error: unknown | any) {
        console.error('Failed to delete resource:', error);
        return error.response ? error.response.data.message : 'An unexpected error occurred';
    }
}
