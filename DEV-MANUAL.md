## Use theme

define primary, secondary and  accent and other theme colors and reuse colors variable

## Define Props type

define props type to clarify the props and its usage

## Separate Layout and component

Now index.vue and some components are used as Layout(used in Router)

Make all as index.vue or separate into Layout and Components 

## Work on responsiveness in parallel

use b-row, b-col and use d-flex class as much as possible to make it easy to implement responsiveness

## Make components more reusable

### make HpDashboardLargeCard more usable for general purpose
receive 4 props for 4 tiles rather receiving type props

### use flexible width and height for the cards (i.e rather than 628px, 327px in HPCard)  and control the width and height on the parent component to make it easy to implement responsiveness

## Use bootstrap classes as much as possible rather than inline style
i.e <div class="form-group col-sm-6 pl-0"> 
rather
<div class="form-group col-sm-6" style="padding-left: 0;">

# Naming

## use PascalCase for components in script and template
i.e AuthLogin.vue
<AuthLogin></AuthLogin>

## use kebab-case for images and css(if css file is separated. But stick to integrate styles into the component)
i.e signup-background.png, signup-middle-right-background.png
signup-modal.scss

## use kebab-case for event
i.e. this.$emit('update-main-img', document)
rather than
this.$emit('update-MainImg', document)

## use camelCase during declaration, but kebab-case in templates for PROPS
i.e <HomeBanner  :main-img=”mainImg”>

## use let, const rather var for scoping 
i.e const profileItems = []; let jobLists = [];

## use camelCase for variables
i.e let profileObject = {}

## use prefix “is”, “has” for boolean variables
i.e let isLoaded = false 

## localization
implement localization for all button, placeholder, title and paragraph.
### how to do
#### add each localization text to /src/langs/en.json, ru.json, uz.json
##### en.json
{
  "hello": "Hello",
}

##### uz.json
{
  "hello": "Salom",
}

##### ru.json
{
  "hello": "Привет",
}

#### translate text in template
<template>
  {{ $t('hello') }}
</template>

<template>
  <b-input
    type="text"
    :placeholder="$t('location')"
    class="form-control"
    v-model="searchInput"
  />
</template>