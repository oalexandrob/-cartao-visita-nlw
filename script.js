const linksSocialMedia = {
  github: 'oalexandrob',
  instagram: 'oalexandrob',
  linkedin: 'in/alexandro-boaventura',
  facebook: 'oalexandrob',
  github: 'oalexandrob'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // alert(`https://${social}.com/${linksSocialMedia[social]}`)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.innerText = data.name
      userBio.innerText = data.bio
      userLogin.innerText = data.login
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
