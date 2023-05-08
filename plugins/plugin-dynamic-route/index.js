// Load content dynamically
module.exports = async (context, options) => {
    return {
        name: 'plugin-dynamic-route',
        async loadContent() {
            /* ... */
        },
        async contentLoaded({ content, actions }) {
            const { routes } = options;
            const { addRoute } = actions;

            routes.forEach((route) => {
                // console.log('Adding route', route)
                addRoute(route)
            });
        },
    };
};
