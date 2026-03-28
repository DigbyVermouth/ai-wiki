function renderSidebar(activePage) {
  const pages = [
    {
      section: 'Start Here',
      links: [
        { href: '../index.html', label: 'Home & Mental Model', id: 'index' },
        { href: '../pages/the-stack.html', label: 'The AI Stack', id: 'stack' },
      ]
    },
    {
      section: 'Core Concepts',
      links: [
        { href: '../pages/llm.html', label: 'LLMs & Foundation Models', id: 'llm' },
        { href: '../pages/agents.html', label: 'Agents & Workflows', id: 'agents' },
        { href: '../pages/mcp.html', label: 'MCP & Connectors', id: 'mcp' },
        { href: '../pages/rag.html', label: 'RAG & Grounding', id: 'rag' },
        { href: '../pages/prompting.html', label: 'Prompting & System Prompts', id: 'prompting' },
      ]
    },
    {
      section: 'Vocabulary',
      links: [
        { href: '../pages/tier1-terms.html', label: 'Tier 1: Must Know Cold', id: 'tier1' },
        { href: '../pages/tier2-terms.html', label: 'Tier 2: Drop Naturally', id: 'tier2' },
        { href: '../pages/gotchas.html', label: 'The Gotcha Guide', id: 'gotchas' },
      ]
    },
    {
      section: 'Tools Map',
      links: [
        { href: '../pages/tools-models.html', label: 'Foundation Models', id: 'tools-models' },
        { href: '../pages/tools-automation.html', label: 'Automation Platforms', id: 'tools-automation' },
        { href: '../pages/tools-apps.html', label: 'AI Apps by Category', id: 'tools-apps' },
      ]
    },
    {
      section: 'Real-World Lab',
      links: [
        { href: '../pages/lab-overview.html', label: 'Lab: Overview', id: 'lab-overview' },
        { href: '../pages/lab-case-study.html', label: 'Proven: AI for Contractors', id: 'lab-case' },
        { href: '../pages/lab-build.html', label: 'New Angle: Build & Pitch', id: 'lab-build' },
        { href: '../pages/lab-architecture.html', label: 'Architecture Walkthrough', id: 'lab-arch' },
      ]
    },
    {
      section: 'Study Plan',
      links: [
        { href: '../pages/weekend.html', label: 'This Weekend', id: 'weekend' },
        { href: '../pages/this-week.html', label: 'This Week', id: 'this-week' },
      ]
    }
  ];

  let html = `
    <div class="sidebar">
      <div class="sidebar-logo">
        <span class="logo-tag">AI Field Guide</span>
        <h1>Monday Ready</h1>
      </div>
  `;

  for (const section of pages) {
    html += `<div class="sidebar-section"><span class="sidebar-section-label">${section.section}</span>`;
    for (const link of section.links) {
      const isActive = activePage === link.id;
      html += `<a href="${link.href}" class="sidebar-link ${isActive ? 'active' : ''}"><span class="dot"></span>${link.label}</a>`;
    }
    html += `</div>`;
  }

  html += `</div>`;
  document.getElementById('sidebar-mount').innerHTML = html;
}
