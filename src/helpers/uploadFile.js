export const uploadFile = (img) => {

    const formData = new FormData();
    formData.append('file', img);
    formData.append('upload_preset', 'photo-gallery-app');
    formData.append('tags', 'photogallery');

    const options = {
        method: 'POST',
        body: formData
    }

    const promise = new Promise((resolve) => {

        fetch(`https://api.Cloudinary.com/v1_1/${ process.env.REACT_APP_CLOUDNAME }/image/upload`, options)
        .then(resp => resp.json())
        .then(data => {
            resolve(data);
        })
        .catch(err => console.log(err))
    })

    return promise;
}
