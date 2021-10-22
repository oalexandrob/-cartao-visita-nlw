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
  }
}

changeSocialMediaLinks()
