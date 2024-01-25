import fetch from 'node-fetch';

export const webhook = async (data: any): Promise<any> => {
    return fetch(process.env.WEBHOOK_URL || '', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });
}