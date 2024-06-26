import React from "react"

const PlaceholderIcon = () => {
  return (
    <>
      <div class="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
        <svg
          class="absolute -left-1 h-12 w-12 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </>
  )
}

export default PlaceholderIcon
