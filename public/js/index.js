/**
  * path_to_file, this is a sign
  * attachment_element, the element onto which to attach the fullscreen video
  * element
  */
let fullscreen_video = (path_to_file, attachment_element) => {
  let control_is_open = false

  let full_screen_div = document.createElement('div')
  full_screen_div.id = 'full-screen-video'
  full_screen_div.style.width = '100vw'
  full_screen_div.style.height = '100vh'
  full_screen_div.style.position = 'fixed'
  full_screen_div.style.backgroundColor = 'black'
  full_screen_div.style.display = 'flex'
  full_screen_div.style.justifyContent = 'center'
  full_screen_div.style.alignItems = 'center'

  let nested_video = document.createElement('video')
  nested_video.src = path_to_file
  nested_video.style.width = '100%'
  nested_video.style.display = 'flex'
  nested_video.style.justifyContent = 'center'
  nested_video.style.alignItems = 'center'

  let control_container = document.createElement('div')
  control_container.id = 'control-container'
  control_container.style.width = '100vw'
  control_container.style.height = '100vh'
  control_container.style.display = 'flex'
  control_container.style.justifyContent = 'center'
  control_container.style.alignItems = 'center'
  control_container.style.position = 'fixed'
  control_container.style.visibility = 'hidden'
  control_container.style.zIndex = '100'

  let back_button_container = document.createElement('div')
  back_button_container.className = 'back-button-container'
  back_button_container.style.width = '100%'
  back_button_container.style.height = '15vh'
  back_button_container.style.alignSelf = 'flex-end'

  let back_button = document.createElement('div')
  back_button.className = 'back-button'
  back_button.style.width = '10vw'
  back_button.style.height = '15vh'
  back_button.style.backgroundColor = 'white'
  back_button.style.opacity = '75%'
  back_button.style.display = 'flex'
  back_button.style.justifyContent = 'center'
  back_button.style.alignItems = 'center'

  let back_button_icon = document.createElement('img')
  back_button_icon.src = 'keyboard_backspace.svg'
  back_button_icon.style.height = '100%'
  back_button_icon.style.width = 'auto'
  back_button.appendChild(back_button_icon)
  back_button_container.appendChild(back_button)

  let control_wrapper = document.createElement('div')
  control_wrapper.id = 'control-wrapper'
  control_wrapper.style.height = '30vh'
  control_wrapper.style.width = '60vw'
  control_wrapper.style.backgroundColor = 'white'
  control_wrapper.style.position = 'absolute'
  control_wrapper.style.display = 'flex'
  control_wrapper.style.justifyContent = 'center'
  control_wrapper.style.alignItems = 'center'
  control_wrapper.style.flexDirection = 'row'

  let skip_back_button = document.createElement('div')
  skip_back_button.style.width = '20vw'
  skip_back_button.style.height = '30vh'
  skip_back_button.style.display = 'flex'
  skip_back_button.style.justifyContent = 'center'
  skip_back_button.style.alignItems = 'center'
  let skip_back_button_icon = document.createElement('img')
  skip_back_button_icon.src = 'skip_previous.svg'
  skip_back_button_icon.className = 'skip-back-button-icon'
  skip_back_button.appendChild(skip_back_button_icon)

  let play_button = document.createElement('div')
  play_button.style.width = '20vw'
  play_button.style.height = '30vh'
  let play_button_icon = document.createElement('img')
  play_button_icon.src = 'play_arrow.svg'
  play_button_icon.className = 'play-button-icon'
  play_button.appendChild(play_button_icon)

  let skip_forward_button = document.createElement('div')
  skip_forward_button.style.width = '20vw'
  skip_forward_button.style.height = '30vh'
  skip_forward_button.style.display = 'flex'
  skip_forward_button.style.justifyContent = 'center'
  skip_forward_button.style.alignItems = 'center'
  let skip_forward_button_icon = document.createElement('img')
  skip_forward_button_icon.src = 'forward_10.svg'
  skip_forward_button_icon.className = 'skip-forward-button-icon'
  skip_forward_button.appendChild(skip_forward_button_icon)

  control_wrapper.appendChild(skip_back_button)
  control_wrapper.appendChild(play_button)
  control_wrapper.appendChild(skip_forward_button)

  control_container.appendChild(back_button_container)
  control_container.appendChild(control_wrapper)
  full_screen_div.appendChild(control_container)
  full_screen_div.appendChild(nested_video)
  attachment_element.appendChild(full_screen_div)


  full_screen_div.addEventListener('click', (evt) => {
    if (control_container.style.visibility == 'hidden' && !control_is_open) {
      control_container.style.visibility = 'visible'
      control_is_open = true
      nested_video.pause()
    }
  })

  play_button.addEventListener('click', (evt) => {
    nested_video.play()
    control_container.style.visibility = 'hidden'
    setTimeout(() => {
      control_is_open = false
    }, 500)
  })

  skip_forward_button.addEventListener('click', (evt) => {
    if (nested_video.currentTime+10 < nested_video.duration) {
      nested_video.currentTime = nested_video.currentTime+10
    }
  })

  skip_back_button.addEventListener('click', (evt) => {
    nested_video.currentTime = 0
  })

  back_button_container.addEventListener('click', (evt) => {
    attachment_element.removeChild(attachment_element.children[0])
  })
}

let main = () => {
  fullscreen_video('test.mp4', document.getElementById('body'))
}
main()
