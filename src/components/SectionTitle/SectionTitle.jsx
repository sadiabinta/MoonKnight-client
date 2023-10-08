

const SectionTitle = ({heading}) => {
    return (
        <div className="w-2/12 mx-auto text-center py-8">
            <h3 className="text-4xl py-4 ">{heading}</h3>
            <hr className="w-24 mx-auto py-4 border-t-4 border-yellow-800" />
        </div>
    );
};

export default SectionTitle;