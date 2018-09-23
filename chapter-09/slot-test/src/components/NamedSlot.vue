<template>
    <div id="page-wrap">
        <header>
            <slot name="header"></slot>
        </header>
        <aside id="sidebar">
            <slot name="sidebar"></slot>
        </aside>
        <section id="content">
            <slot name="content"></slot>
        </section>
        <footer>
            <slot id="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "NamedSlot"
    }
</script>

<style scoped>
    #page-wrap {
        padding: 5px;
        width: 960px;
        margin: 20px auto;
    }

    header {
        height: 100px;
        padding: 0 15px;
    }

    #content {
        width: 696px;
        float: left;
        padding: 5px 15px;
        min-height: 300px;
    }

    #sidebar {
        width: 200px;
        padding: 5px 15px;
        float: left;
    }

    footer {
        clear: both;
        padding: 0 15px;
    }

    @media screen and (max-width: 980px) {
        #page-wrap {
            width: 94%;
        }

        #content {
            clear: both;
            padding: 1% 4%;
            width: auto;
            float: none;
        }

        #sidebar {
            clear: both;
            padding: 1% 4%;
            width: auto;
            float: none;
        }

        header, footer {
            padding: 1% 4%;
        }
    }

    /* 공통 스타일 */
    #content {
        background: #f8f8f8;
    }

    #sidebar {
        background: #f0efef;
    }

    header, #content, #middle, #sidebar {
        margin-bottom: 5px;
    }

    #page-wrap, header, #content, #middle, #sidebar, footer {
        border: solid 1px #ccc;
    }
</style>