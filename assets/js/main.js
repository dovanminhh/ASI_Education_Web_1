// Enabale overlayscrollbars
var {
    OverlayScrollbars,
    ScrollbarsHidingPlugin,
    SizeObserverPlugin,
    ClickScrollPlugin
} = OverlayScrollbarsGlobal;


// OS Theme Light
const customScrollsLight = document.querySelectorAll(".custom-scroll-light");
customScrollsLight.forEach((customScrollItem) => {
    OverlayScrollbars(customScrollItem, {
        scrollbars: {
            theme: 'os-theme-light'
        }
    });

});

// OS Theme Dark 
const customScrolls = document.querySelectorAll(".custom-scroll");
customScrolls.forEach((customScrollItem) => {
    OverlayScrollbars(customScrollItem, {});
});

