import Container from "@/components/container";
import { cloudinaryUrl } from "@/util/cloudinary";
import { getImageByPublicId } from "@/util/fetch";
import Image from "next/image";

const get = getImageByPublicId('not-for-profit')

export default async function GearRental() {
    const image = await get()
    const { blurDataURL, public_id, format } = image

    return (
        <Container>
            <Image
                placeholder='blur'
                blurDataURL={blurDataURL}
                alt={public_id}
                src={cloudinaryUrl({ public_id, format, transformation: `w_1312` })}
                style={{ objectFit: 'cover' }}
                fill
            />
            Gear rental
        </Container>
    )
}
