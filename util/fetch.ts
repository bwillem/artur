import 'server-only'
import cloudinary from "@/cloudinary";
import { ImageProps } from "@/types";
import getBase64ImageUrl from "@/util/blurPlaceholder";
import { cache } from "react";

export const revalidate = 3600 * 24 // revalidate data at most every day

const isImage = (x: ImageProps) => x.format !== 'mp4'
const isVideo = (x: ImageProps) => x.format === 'mp4'

/**
 * get list of images by folder 
 */
export const getImages = (folder: string) => cache(async () => {
    const results = await cloudinary.search
        .expression(`folder:${folder}`)
        .execute()

    const images = results.resources.filter(isImage)
    const videos = results.resources.filter(isVideo)

    let i = 0

    for (let image of images) {
        const blurDataURL = await getBase64ImageUrl(image)
        images[i].blurDataURL = blurDataURL
        i++
    }

    return { images, videos }
})

/**
 * get images by asset ids
 */
export const getImagesByIds = (ids: string[]) => cache(async () => {
    const results = await cloudinary.api
        .resources_by_asset_ids(ids)

    const images = results.resources

    let i = 0

    for (let image of images) {
        const blurDataURL = await getBase64ImageUrl(image)
        images[i].blurDataURL = blurDataURL
        i++
    }

    return images
})

/**
 * get one image by public id
 */
export const getImageByPublicId = (publicId: string) => cache(async () => {
    const results = await cloudinary.api
        .resource(publicId)

    const image = {
        ...results,
        blurDataURL: await getBase64ImageUrl(results)
    }

    return image
})
