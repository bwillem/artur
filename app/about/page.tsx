import Container from "@/components/container"
import { cloudinaryUrl } from "@/util/cloudinary"
import { getImageByPublicId } from "@/util/fetch"
import Image from "next/image"

const get = getImageByPublicId('about_art')

export default async function () {
    const image = await get()

    // try {
    //     console.log(images)
    // } catch (e) {
    //     console.error(e)
    // }

    const { blurDataURL, public_id, format } = image

    return (
        <Container as='main'>
            <Image
                placeholder='blur'
                blurDataURL={blurDataURL}
                alt={public_id}
                src={cloudinaryUrl({ public_id, format, transformation: `w_1312` })}
                style={{ objectFit: 'cover' }}
                fill
            />
        </Container>
    )
}
