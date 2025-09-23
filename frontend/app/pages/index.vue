<template>
      <div class="page flex-1 p-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-5">
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to KasiPlay
          </h1>
          <p class="text-gray-600 dark:text-gray-300">
            This is your responsive dashboard layout. The sidebar adapts to
            different screen sizes:
          </p>
          <ul
            class="mt-3 text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1"
          >
            <li>
              <strong>Mobile:</strong> Hidden by default, shows with overlay
              when toggled
            </li>
            <li>
              <strong>Desktop:</strong> Can be collapsed to show only icons or
              fully expanded
            </li>
            <li><strong>Theme:</strong> Switch between light and dark modes</li>
          </ul>
        </div>
      </div>
</template>


<script setup lang="ts"></script>