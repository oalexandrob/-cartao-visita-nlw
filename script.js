const linksSocialMedia = {
  github: 'oalexandrob',
  instagram: 'oalexandrob',
  linkedin: 'in/alexandro-boaventura',
  facebook: 'oalexandrob',
  whatsapp: 'send?phone=5571992164512'
}

function changeSocialMediaLinks() {
  {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('id')
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
  }
}

changeSocialMediaLinks()
