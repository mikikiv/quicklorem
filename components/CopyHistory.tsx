import { Button, CopyButton, Text, Timeline, Title } from "@mantine/core"
import { IconCopy } from "@tabler/icons-react"
import { useState } from "react"

type Props = {}

export default function CopyHistory({}: Props) {
  const [selectedHistory, setSelectedHistory] = useState<number>(0)

  return (
    <>
      <Timeline bulletSize={24}>
        <Timeline.Item
          bullet={<IconCopy cursor="pointer" size={16} />}
          key={1}
          onClick={() => {
            setSelectedHistory(1)
          }}
          active={selectedHistory === 1}
          style={{ cursor: "pointer" }}
        >
          <CopyButton
            timeout={2000}
            value={"this is copy text that is too long to display "}
          >
            {({ copied, copy }) => (
              <Text
                onClick={copy}
                lineClamp={selectedHistory !== 1 ? 1 : undefined}
              >
                {copied
                  ? "copied this is the copy textthat is too long to display"
                  : "this is the copy textthat is too long to display"}
              </Text>
            )}
          </CopyButton>
        </Timeline.Item>
      </Timeline>
    </>
  )
}
