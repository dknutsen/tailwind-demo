export default [
{
index: 0,
name: 'blank',
template: ` `
}, {
index: 3,
name: 'typography',
template:
`{{#let
  (array "xs" "sm" "base" "lg" "xl" "2xl")
  (array "hairline" "thin" "light" "normal" "medium" "semibold" "bold" "extrabold" "black")
  (array "sans" "serif" "mono")
  (array "normal-case" "capitalize" "lowercase" "uppercase")
as |sizes weights families transforms|}}
<div class="flex flex-col">
  <div class="flex flex-row bg-gray-200">
    {{#x-select value=this.family onChange=(action (mut this.family)) as |xs|}}
      {{#each families as |family|}}{{#xs.option value=family}}{{family}}{{/xs.option}}{{/each}}
    {{/x-select}}
    {{#x-select value=this.transform onChange=(action (mut this.transform)) as |xs|}}
      {{#each transforms as |transform|}}{{#xs.option value=transform}}{{transform}}{{/xs.option}}{{/each}}
    {{/x-select}}
    <button {{action (toggle "italic" this)}} class="p-1 m-2 border border-gray-500 rounded">{{unless this.italic 'not '}}italic</button>
  </div>
  <table>
    <tr>
      <td class="bg-gray-200"></td>
      {{#each sizes as |size|}}<td class="bg-gray-200 text-center">{{size}}</td>{{/each}}
    </tr>
    {{#each weights as |weight|}}
      <tr>
        <td class="bg-gray-200">{{weight}}</td>
        {{#each sizes as |size|}}
          <td class="p-2">
            <button
              class="font-{{weight}} font-{{family}} text-{{size}} {{transform}} {{if this.italic 'italic'}}"
              {{action (mut this.chosen) (concat "font-" family " font-" weight " text-" size " " transform (if this.italic ' italic'))}}
            >
              {{size}} {{weight}}
            </button>
          </td>
        {{/each}}
      </tr>
    {{/each}}
  </table>

  <div class="bg-gray-200 p-2 flex items-center justify-center">{{chosen}}</div>
</div>
{{/let}}`
}, {
index: 4,
name: 'color palette',
template:
`<div class="flex flex-col">
  {{#each (array "gray" "red" "orange" "yellow" "green" "teal" "blue" "indigo" "purple" "pink") as |color|}}
    <div class="flex flex-row">
      {{#each (array 1 2 3 4 5 6 7 8 9) as |index|}}
        <div class="hover:bg-{{color}}-500 hover:text-white  bg-{{color}}-{{index}}00 {{if (gt index 4) 'text-white'}} w-24 h-12 p-1 flex items-center justify-center">
          {{color}} {{index}}00
        </div>
      {{/each}}
    </div>
  {{/each}}
</div>`
}, {
index: 5,
name: 'styleguide starter',
template:
`{{#let (hash
  default=(hash color="gray" icon="info-circle")
  primary=(hash color="blue" icon="info-circle")
  success=(hash color="green" icon="check-circle")
  warning=(hash color="orange" icon="exclamation-triangle")
  danger=(hash color="red" icon="times-circle")
) as |themes|}}
  <table>
    <thead><tr><th></th><th>default</th><th>primary</th><th>success</th><th>warning</th><th>danger</th></tr></thead>
    <tbody>
      <tr>
        <td>Badge</td>
        {{#each-in themes as |name theme|}}
          <td class="text-center border border-grey-200 p-4">

          </td>
        {{/each-in}}
      </tr>
    </tbody>
  </table>
{{/let}}`
}, {
index: 6,
name: 'styleguide complete',
template:
`{{#let (hash
  default=(hash color="gray" icon="info-circle")
  primary=(hash color="blue" icon="info-circle")
  success=(hash color="green" icon="check-circle")
  warning=(hash color="orange" icon="exclamation-triangle")
  danger=(hash color="red" icon="times-circle")
) as |themes|}}
  <table>
    <thead><tr><th></th><th>default</th><th>primary</th><th>success</th><th>warning</th><th>danger</th></tr></thead>
    <tbody>
      <tr>
        <td>Badge</td>
        {{#each-in themes as |name theme|}}
          <td class="text-center border border-grey-200 p-4">
            <span class="bg-{{theme.color}}-500 text-white text-sm px-2 py-1 rounded-full">Badge</span>
          </td>
        {{/each-in}}
      </tr>
      <tr>
        <td>Solid Button</td>
        {{#each-in themes as |name theme|}}
          <td class="text-center border border-grey-200 p-4">
            <button class="bg-{{theme.color}}-500 hover:bg-{{theme.color}}-700 shadow-md font-bold text-white text-sm px-4 py-2 rounded">Button</button>
          </td>
        {{/each-in}}
      </tr>
      <tr>
        <td>Outline Button</td>
        {{#each-in themes as |name theme|}}
          <td class="text-center border border-grey-200 p-4">
            <button class="hover:bg-{{theme.color}}-500 text-{{theme.color}}-700 hover:text-white border border-{{theme.color}}-500 text-sm px-4 py-2 rounded shadow-md font-bold ">Button</button>
          </td>
        {{/each-in}}
      </tr>
      <tr>
        <td>Alert/Banner</td>
        {{#each-in themes as |name theme|}}
          <td class="text-center border border-grey-200 p-4">
            <div class="bg-{{theme.color}}-200 text-{{theme.color}}-800 border border-{{theme.color}}-500 text-sm px-4 py-2 rounded shadow-md font-bold ">
              {{fa-icon theme.icon class="mr-2"}}
              Alert!
            </div>
          </td>
        {{/each-in}}
      </tr>
    </tbody>
  </table>
{{/let}}`
}, {
index: 10,
name: 'width/height',
template:
`<div class="w-full h-full p-8">
  <h1 class="text-3xl mb-8">Width & Height</h1>
  <div class="flex flex-col">
    {{#let "h-12 text-xl text-white flex items-center justify-center" as |formatting|}}
      <h2 class="text-2xl">Fixed</h2>
      <div class="w-full flex flex-col mb-16">
        <div class="w-64 bg-red-600 {{formatting}}">w-64 (16rem)</div>
        <div class="w-56 bg-orange-600 {{formatting}}">w-56 (14rem)</div>
        <div class="w-48 bg-yellow-600 {{formatting}}">w-48 (12rem)</div>
        <div class="h-8 text-xl ">...</div>
        <div class="w-4 bg-blue-600 {{formatting}}"></div>
      </div>

      <h2 class="text-2xl">Fluid</h2>
      <div class="w-full flex flex-col">
        <div class="w-1/2 bg-red-600 {{formatting}}">w-1/2</div>
        <div class="w-1/3 bg-orange-600 {{formatting}}">w-1/3</div>
        <div class="w-1/4 bg-yellow-600 {{formatting}}">w-1/4</div>
        <div class="w-1/5 bg-green-600 {{formatting}}">w-1/5</div>
        <div class="w-1/6 bg-blue-600 {{formatting}}">w-1/6</div>
        <div class="w-1/12 bg-purple-600 {{formatting}}">w-1/12</div>
      </div>
    {{/let}}
  </div>
</div>`
}, {
index: 11,
name: 'padding & margin',
template:
`<div class="w-full h-full p-8">
  <h1 class="text-3xl mb-8">Padding & Margin</h1>
  <div class="flex flex-col">
    <h2 class="text-2xl">Uniform</h2>
    <div class="flex flex-row">
      Choose size:
      {{#x-select value=this.size onChange=(action (mut this.size)) as |xs|}}
        {{#each (array "6" "8" "10" "12" "16" "20" "24") as |pmsize|}}
          {{#xs.option value=pmsize}}{{pmsize}}{{/xs.option}}
        {{/each}}
      {{/x-select}}
    </div>
    <div class="flex flex-row items-center justify-center">
      <div class="bg-blue-600 text-white w-{{mult 4 this.size}} h-{{mult 4 this.size}} p-{{this.size}} m-{{this.size}} flex items-center justify-center">w-48 h-32</div>

      <div class="bg-orange-300 relative">
        <span class="absolute">m-{{this.size}} ({{div this.size 4}}rem)</span>
        <div class="bg-blue-600 text-blue-600 hover:bg-green-300 hover:text-black m-{{this.size}} relative">
        <span class="absolute">p-{{this.size}} ({{div this.size 4}}rem)</span>
          <div class="p-{{this.size}}">
            <div class="bg-blue-600 text-white w-{{mult 2 this.size}} h-{{mult 2 this.size}} flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}, {
index: 21,
name: 'components - image card',
template:
`{{#let (hash
  title="The Coldest Sunset"
  caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
  img="https://v0.tailwindcss.com/img/card-top.jpg"
  imgAlt="Sunset in the mountains"
  tags=(array "photography" "travel" "winter")
) as |args|}}

  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src={{args.img}} alt={{args.imgAlt}}>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{args.title}}</div>
      <p class="text-gray-700 text-base">{{args.caption}}</p>
    </div>
    <div class="px-6 py-4">
      {{#each args.tags as |tag|}}
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{{tag}}</span>
      {{/each}}
    </div>
  </div>

{{/let}}`
}];
