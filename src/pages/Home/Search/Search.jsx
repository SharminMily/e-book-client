import {Input} from "@nextui-org/react";
// import {SearchIcon} from "./SearchIcon";

const Search = () => {
    return (
        <div className="mt-20 flex justify-center">
            
      <Input
      className="w-96 mb-20 "
        label=""
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/10 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "border",
            "border-gray-400",
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."        
      />
    {/* </div> */}
        </div>
    );
};

export default Search;
// export default Search;