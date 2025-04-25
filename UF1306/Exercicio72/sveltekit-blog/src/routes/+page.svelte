<script>
    export let data;
    const { posts } = data;
    console.log(posts); 
   </script>
   <h1>Blog</h1>
   <ul>
   {#each posts as post}
   <li>
    <img src="{post.image}" alt="{post.title}">
   <a href={post.path}>{post.title}</a>
   <p>{post.summary}</p>
   <small>{post.date}</small>
   </li>
   {/each}
</ul>