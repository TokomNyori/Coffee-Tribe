

const SectionHeaders = ({ header, subHeader }) => {
    return (
        <>
            <h3 className="text-gray-500 uppercase font-semibold leading-6">
                {subHeader}
            </h3>
            <h2 className="text-primary font-bold text-3xl mb-8">
                {header}
            </h2>
        </>
    )
}

export default SectionHeaders