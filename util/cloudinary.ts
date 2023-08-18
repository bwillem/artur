const cloudinaryUrl = ({ public_id, format, transformation }) =>
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${transformation}/${public_id}.${format}`

export { cloudinaryUrl }
