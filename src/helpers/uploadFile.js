export const uploadFile = (img) => {
    
    const formData = new FormData();
    formData.append('file', img);
    formData.append('upload_preset', 'photo-gallery-app');

    const options = {
        method: 'POST',
        body: formData
    }
    const cloudName = 'duljg8kl5';

    fetch(`https://api.Cloudinary.com/v1_1/${ cloudName }/image/upload`, options)
        .then(resp => resp.json())
        .then(resp => console.log(resp))

}
