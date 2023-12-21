import { Grid } from '@/components/chakra'

const ImageGrid = props => {
    return <Grid
        mt={4}
        gap={4}
        gridTemplateColumns={['1fr', '1fr', 'repeat(3, 1fr)']}
        {...props}
    />
}

export default ImageGrid
