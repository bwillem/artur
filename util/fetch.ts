import cloudinary from "@/cloudinary";
import getBase64ImageUrl from "@/util/blurPlaceholder";
import { cache } from "react";

export const revalidate = 3600 * 24 // revalidate data at most every day

const folder = 'work'

export const getImages = cache(async () => {
    const results = await cloudinary.search
        .expression(`folder:${folder}`)
        .execute()

    const images = results.resources

    let i = 0

    for (let image of images) {
        const blurDataURL = await getBase64ImageUrl(image)
        images[i].blurDataURL = blurDataURL
        i++
    }

    return images
})
