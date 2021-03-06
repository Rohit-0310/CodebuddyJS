// level {1/2/3}

// level 2

```
async function getUsers() {
  let doc = await Promise.all(getUser(), getProfile(), getPosts());

  let user = doc[0];
  let Profile = doc[1];
  let p = doc[2];

  const userProfile = {
    user: user,
    profile: Profile,
    posts: p
  };

  return userProfile;
}
```


const getUsers = async()=>{
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
    let [user, profile, p] = doc;

    const [user, profile:Profile, posts:p] = userProfile;
    return userProfile;
}