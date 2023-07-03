import { Button, CopyButton, Text, Timeline, Title } from "@mantine/core"
import { IconCopy } from "@tabler/icons-react"
import { useEffect, useState } from "react"

type Props = {}

type CopyHistory = {
  id: string
  value: string
}

export default function CopyHistory({}: Props) {
  const [selectedHistory, setSelectedHistory] = useState<number>(0)

  const [copyHistory, setCopyHistory] = useState<CopyHistory[] | null>([])

  useEffect(() => {
    const copyHistory = localStorage.getItem("copyHistory")
    if (copyHistory !== null) {
      setCopyHistory(JSON.parse(copyHistory))
    }
  }, [])

  return (
    <>
      <Timeline bulletSize={24}>
        {copyHistory?.map((copyItem) => (
          <Timeline.Item
            bullet={<IconCopy cursor="pointer" size={16} />}
            key={copyItem.id}
            onClick={() => {
              setSelectedHistory(1)
            }}
            active={selectedHistory === 1}
            style={{ cursor: "pointer" }}
          >
            <CopyButton timeout={2000} value={copyItem.value}>
              {({ copied, copy }) => (
                <Text
                  onClick={copy}
                  lineClamp={selectedHistory !== 1 ? 1 : undefined}
                >
                  {copied
                    ? "copied this is the copy textthat is too long to display"
                    : copyItem.value}
                </Text>
              )}
            </CopyButton>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  )
}
