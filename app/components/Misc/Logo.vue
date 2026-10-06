<template>
    <div>
        <ColorScheme :placeholder="TITLE" tag="div">
            <img :src="$colorMode.preference == `dark` ? `/logo_dark.png` : `/logo.png`" />
        </ColorScheme>
    </div>
</template>