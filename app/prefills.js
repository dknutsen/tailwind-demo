export default [
{
index: 0,
name: 'blank',
template: ` `
}, {
index: 2,
name: 'text',
template:
`<div class="w-64">

<h1 class="">Hipsum</h1>

<p class="">Hammock small batch beard la croix ethical paleo coloring book. Chillwave humblebrag forage tofu. Four dollar toast kombucha VHS church-key mixtape.</p>

</div>`
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

            <span class="">badge</span>

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
          <td class="border border-grey-200 p-4">

            <span class="bg-{{theme.color}}-500 text-white text-sm px-2 py-1 rounded-full">Badge</span>

          </td>
        {{/each-in}}
      </tr>
      <tr>
        <td>Solid Button</td>
        {{#each-in themes as |name theme|}}
          <td class="border border-grey-200 p-4">

            <button class="bg-{{theme.color}}-500 hover:bg-{{theme.color}}-700 shadow-md font-bold text-white text-sm px-4 py-2 rounded">Button</button>

          </td>
        {{/each-in}}
      </tr>
      <tr>
        <td>Outline Button</td>
        {{#each-in themes as |name theme|}}
          <td class="border border-grey-200 p-4">

            <button class="hover:bg-{{theme.color}}-500 text-{{theme.color}}-700 hover:text-white border border-{{theme.color}}-500 text-sm px-4 py-2 rounded shadow-md font-bold ">Button</button>

          </td>
        {{/each-in}}
      </tr>
      <tr>
        <td>Alert Banner</td>
        {{#each-in themes as |name theme|}}
          <td class="border border-grey-200 p-4">

            <div class="bg-{{theme.color}}-200 text-{{theme.color}}-800 border border-{{theme.color}}-500 text-sm px-4 py-2 rounded font-bold ">
              {{fa-icon theme.icon class="mr-2"}}
              Alert!
            </div>

          </td>
        {{/each-in}}
      </tr>
      <tr>
        <td>Callout alert</td>
        {{#each-in themes as |name theme|}}
          <td class="border border-grey-200 p-4">

            <div class="bg-{{theme.color}}-200 text-{{theme.color}}-800 border-l-4 border-{{theme.color}}-500 text-sm px-4 py-2 rounded ">
              <div class="font-bold">{{name}}</div>
              <div>text here</div>
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
}, {
index: 22,
name: 'components - user reviews card',
template:
`<!-- review item -->
<div class="mx-auto bg-white shadow-lg rounded-lg my-32 px-4 py-4 max-w-sm ">
   <div class="mb-1 tracking-wide px-4 py-4" >
      <h2 class="text-gray-800 font-semibold mt-1">67 Users reviews</h2>
      <div class="border-b -mx-8 px-8 pb-3">
         <div class="flex items-center mt-1">
            <div class=" w-1/5 text-indigo-500 tracking-tighter">
               <span>5 star</span>
            </div>
            <div class="w-3/5">
               <div class="bg-gray-300 w-full rounded-lg h-2">
                  <div class=" w-7/12 bg-indigo-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div class="w-1/5 text-gray-700 pl-3">
               <span class="text-sm">51%</span>
            </div>
         </div><!-- first -->
         <div class="flex items-center mt-1">
            <div class="w-1/5 text-indigo-500 tracking-tighter">
               <span>4 star</span>
            </div>
            <div class="w-3/5">
               <div class="bg-gray-300 w-full rounded-lg h-2">
                  <div class="w-1/5 bg-indigo-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div class="w-1/5 text-gray-700 pl-3">
               <span class="text-sm">17%</span>
            </div>
         </div><!-- second -->
         <div class="flex items-center mt-1">
            <div class="w-1/5 text-indigo-500 tracking-tighter">
               <span>3 star</span>
            </div>
            <div class="w-3/5">
               <div class="bg-gray-300 w-full rounded-lg h-2">
                  <div class=" w-3/12 bg-indigo-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div class="w-1/5 text-gray-700 pl-3">
               <span class="text-sm">19%</span>
            </div>
         </div><!-- thierd -->
         <div class="flex items-center mt-1">
            <div class=" w-1/5 text-indigo-500 tracking-tighter">
               <span>2 star</span>
            </div>
            <div class="w-3/5">
               <div class="bg-gray-300 w-full rounded-lg h-2">
                  <div class=" w-1/5 bg-indigo-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div class="w-1/5 text-gray-700 pl-3">
               <span class="text-sm">8%</span>
            </div>
         </div><!-- 4th -->
         <div class="flex items-center mt-1">
            <div class="w-1/5 text-indigo-500 tracking-tighter">
               <span>1 star</span>
            </div>
            <div class="w-3/5">
               <div class="bg-gray-300 w-full rounded-lg h-2">
                  <div class=" w-2/12 bg-indigo-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div class="w-1/5 text-gray-700 pl-3">
               <span class="text-sm">5%</span>
            </div>
         </div><!-- 5th -->
      </div>
   </div>
   <div class="w-full px-4">
      <h3 class="font-medium tracking-tight">Review this item</h3>
      <p class="text-gray-700 text-sm py-1">
         give your opinion about this item.
      </p>
      <button class="bg-gray-100 border border-gray-400 px-3 py-1 rounded  text-gray-800 mt-2">write a review</button>
   </div>
</div>`
}, {
index: 23,
name: 'components - pagination footer',
template:
`<div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
  <div class="flex-1 flex justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      Previous
    </a>
    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      Next
    </a>
  </div>
  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p class="text-sm leading-5 text-gray-700">
        Showing
        <span class="font-medium">1
        </span>
        to
        <span class="font-medium">10
        </span>
        of
        <span class="font-medium">97
        </span>
        results
      </p>
    </div>
    <div>
      <nav class="relative z-0 inline-flex shadow-sm">
        <button type="button" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          1
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          2
        </button>
        <button type="button" class="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          3
        </button>
        <span class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700">
          ...
        </span>
        <button type="button" class="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          8
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          9
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          10
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
      </nav>
    </div>
  </div>
</div>`
}, {
index: 24,
name: 'components - user select',
template:
`{{#let (array
  (hash id="1" name="Tom Cook" imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
  (hash id="2" name="Shill Philler" imgSrc="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80")
  (hash id="3" name="Freddy Cue" imgSrc="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;w=256&amp;h=256&amp;q=80")
) as |users|}}
  <div class="space-y-1 w-64">
    <label id="listbox-label" class="block text-sm leading-5 font-medium text-gray-700">
      Assigned to
    </label>
    <div class="relative">

      {{!-- trigger --}}
      <span class="inline-block w-full rounded-md shadow-sm">
        <button {{action (toggle "expanded" this)}} type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">

          {{!-- current user shown in trigger --}}
          {{#let (find-by "id" this.selected users) as |user|}}
            <div class="flex items-center space-x-3">
              {{#if user}}
                <img src={{user.imgSrc}} alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                <span class="block truncate">{{user.name}}</span>
              {{else}}
                <span class="block truncate">Select a user</span>
              {{/if}}
            </div>
          {{/let}}

          {{!-- "dropdown" icon --}}
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </span>

      {{!-- options --}}
      {{#if this.expanded}}
        <div class="absolute mt-1 w-full rounded-md bg-white shadow-lg">
          <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">
            {{#each users as |user|}}
              <li id="listbox-item-0" role="option" class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" {{action (mut this.selected) user.id on="click"}}>
                {{!-- individual option --}}
                <div class="flex items-center space-x-3">
                  <img src={{user.imgSrc}} alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                  <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                  <span class="{{if (eq this.selected user.id) 'font-semibold' 'font-normal'}} block truncate">
                    {{user.name}}
                  </span>
                </div>

                {{!-- checkmark indicating current selection --}}
                {{#if (eq this.selected user.id)}}
                  <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                {{/if}}
              </li>
            {{/each}}
          </ul>
        </div>
      {{/if}}
    </div>
  </div>
{{/let}}`
}];
