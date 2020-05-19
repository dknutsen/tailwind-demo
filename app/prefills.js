export default [
{
index: 0,
name: 'blank',
template: ` `
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
name: 'card',
template:
`<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://v0.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>
</div>
`}
];
