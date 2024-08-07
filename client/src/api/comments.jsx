const baseUrl = 'http://localhost:3000/malls/';


export const addComment = async(newComment, partialUrl) => {
    try {
      const url = baseUrl + partialUrl;
      console.log('Posting to URL:', url);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
      const data = await response.json();
      console.log('New Comment Submitted:', newComment); // For demonstration
      return data;
    } catch (err) {
      console.error(err);
    }
  }