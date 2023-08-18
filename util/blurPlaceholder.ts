import 'server-only'
// import imagemin from 'imagemin'
// import imageminjpegtran from 'imagemin-jpegtran'
import { ImageProps } from "../types"
import sharp from 'sharp'

const cache = new Map<ImageProps, string>()

// generate blur placeholder
const getBase64ImageUrl = async (image: ImageProps) => {
    let url = cache.get(image)
    if (url) {
        return url
    }
    const response = await fetch(
        `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
    )
    const buffer = await response.arrayBuffer()
    // const minified = await imagemin.buffer(Buffer.from(buffer), {
    //     plugins: [imageminjpegtran()],
    // })
    const minified = await sharp(Buffer.from(buffer)).jpeg({ quality: 10 }).toBuffer()
    url = `data:image/jpeg;base64,${Buffer.from(minified).toString('base64')}`
    cache.set(image, url)
    return url
}

export default getBase64ImageUrl
