import Image from 'next/image'

export function GranolaDivider() {
    return (
        <div className="my-16 flex justify-center">
            <div className="relative w-full max-w-sm h-12">
                <Image
                    src="https://prodcontent.cascadianfarm.com/wp-content/uploads/2018/12/Product-ImagesArtboard-2-1x.png"
                    alt="Granola Bar Divider"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    )
}

