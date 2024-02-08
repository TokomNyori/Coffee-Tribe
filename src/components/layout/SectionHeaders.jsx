

const SectionHeaders = ({ header, subHeader }) => {
    return (
        <>
            <h3 className="text-gray-500 uppercase font-semibold leading-6">
                {subHeader}
            </h3>
            <h2 className="text-primarySecond font-bold text-4xl">
                {header}
            </h2>
        </>
    )
}

export default SectionHeaders