import { useState, type CSSProperties } from 'react'

type LabContent = {
  label: string
  eyebrow: string
  title: string
  intro: string
  status: string
  run: string
  decisionLabel: string
  tradeoffLabel: string
  leadMoveLabel: string
  toolsLabel: string
  scenarios: readonly {
    id: string
    tab: string
    title: string
    brief: string
    nodes: readonly string[]
    decision: string
    tradeoff: string
    leadMove: string
    tools?: readonly string[]
  }[]
  ai: {
    mark: string
    eyebrow: string
    title: string
    copy: string
    tags: readonly string[]
  }
}

export default function TechLeadLab({ content }: { content: LabContent }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [runKey, setRunKey] = useState(0)
  const scenario = content.scenarios[activeIndex]

  const selectScenario = (index: number) => {
    setActiveIndex(index)
    setRunKey((value) => value + 1)
  }

  return (
    <section className="lab section" id="lab">
      <div className="section-label lab-label"><span>05</span> {content.label}</div>

      <div className="lab-content">
        <header className="lab-heading">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2>{content.title}</h2>
          </div>
          <p>{content.intro}</p>
        </header>

        <div className="lab-tabs" role="group" aria-label={content.label}>
          {content.scenarios.map((item, index) => (
            <button
              className={index === activeIndex ? 'active' : ''}
              type="button"
              aria-pressed={index === activeIndex}
              key={item.id}
              onClick={() => selectScenario(index)}
            >
              <span>0{index + 1}</span>
              {item.tab}
            </button>
          ))}
        </div>

        <div className="lab-playground">
          <div className="lab-scenario-copy">
            <p className="lab-status"><span aria-hidden="true" /> {content.status}</p>
            <h3>{scenario.title}</h3>
            <p>{scenario.brief}</p>
            <button className="lab-run" type="button" onClick={() => setRunKey((value) => value + 1)}>
              {content.run} <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="lab-flow-wrap">
            <div className="lab-flow-stage" key={`${scenario.id}-${runKey}`}>
              <span className="flow-track" aria-hidden="true" />
              <span className="flow-signal" aria-hidden="true" />
              <ol className="lab-flow" aria-label={scenario.title}>
                {scenario.nodes.map((node, index) => (
                  <li className="flow-node" style={{ '--node-index': index } as CSSProperties} key={node}>
                    <span className="flow-index">0{index + 1}</span>
                    <strong>{node}</strong>
                    <span className="flow-state">{index === scenario.nodes.length - 1 ? '✓' : '↗'}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {scenario.tools && (
          <div className="lab-toolchain">
            <p>{content.toolsLabel}</p>
            <div>{scenario.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
        )}

        <div className="lab-insights">
          <article>
            <span>01</span>
            <h4>{content.decisionLabel}</h4>
            <p>{scenario.decision}</p>
          </article>
          <article>
            <span>02</span>
            <h4>{content.tradeoffLabel}</h4>
            <p>{scenario.tradeoff}</p>
          </article>
          <article>
            <span>03</span>
            <h4>{content.leadMoveLabel}</h4>
            <p>{scenario.leadMove}</p>
          </article>
        </div>

        <aside className="ai-lab-card">
          <div className="ai-orbit" aria-hidden="true">
            <span>{content.ai.mark}</span>
            <i />
            <i />
            <i />
          </div>
          <div>
            <p className="eyebrow">{content.ai.eyebrow}</p>
            <h3>{content.ai.title}</h3>
            <p className="ai-copy">{content.ai.copy}</p>
            <div className="ai-tags">{content.ai.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </aside>
      </div>
    </section>
  )
}
