import * as React from "react"

type ChartProps = React.HTMLAttributes<HTMLDivElement>
type ChartContainerProps = React.HTMLAttributes<HTMLDivElement>
type ChartTooltipProps = React.HTMLAttributes<HTMLDivElement>
type ChartTooltipContentProps = React.HTMLAttributes<HTMLDivElement>
type ChartLegendProps = React.HTMLAttributes<HTMLDivElement>
type ChartLegendItemProps = React.HTMLAttributes<HTMLDivElement>
type ChartLineProps = React.HTMLAttributes<SVGPathElement> & {
  dataKey: string
  stroke: string
  strokeWidth: number
  dot: boolean
}
type ChartXAxisProps = React.HTMLAttributes<SVGPathElement> & {
  dataKey: string
  tickLine: boolean
  axisLine: boolean
  tickFormatter?: (value: any) => string
}
type ChartYAxisProps = React.HTMLAttributes<SVGPathElement> & {
  tickLine: boolean
  axisLine: boolean
  tickFormatter?: (value: any) => string
}
type ChartAreaProps = React.HTMLAttributes<SVGPathElement> & { dataKey: string; fill: string; fillOpacity: number }

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(({ children, className, ...props }, ref) => {
  return (
    <div className={className} ref={ref} {...props}>
      {children}
    </div>
  )
})
Chart.displayName = "Chart"

export const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={className} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

export const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={className} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
ChartTooltip.displayName = "ChartTooltip"

export const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={className} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={className} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
ChartLegend.displayName = "ChartLegend"

export const ChartLegendItem = React.forwardRef<HTMLDivElement, ChartLegendItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={className} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
ChartLegendItem.displayName = "ChartLegendItem"

export const ChartLine = React.forwardRef<SVGAElement, ChartLineProps>(
  ({ dataKey, stroke, strokeWidth, dot, className, ...props }, ref) => {
    return <path className={className} ref={ref} d="" stroke={stroke} strokeWidth={strokeWidth} {...props} />
  },
)
ChartLine.displayName = "ChartLine"

export const ChartXAxis = React.forwardRef<SVGAElement, ChartXAxisProps>(
  ({ dataKey, tickLine, axisLine, tickFormatter, className, ...props }, ref) => {
    return <g className={className} ref={ref} {...props} />
  },
)
ChartXAxis.displayName = "ChartXAxis"

export const ChartYAxis = React.forwardRef<SVGAElement, ChartYAxisProps>(
  ({ tickLine, axisLine, tickFormatter, className, ...props }, ref) => {
    return <g className={className} ref={ref} {...props} />
  },
)
ChartYAxis.displayName = "ChartYAxis"

export const ChartArea = React.forwardRef<SVGAElement, ChartAreaProps>(
  ({ dataKey, fill, fillOpacity, className, ...props }, ref) => {
    return <path className={className} ref={ref} d="" fill={fill} fillOpacity={fillOpacity} {...props} />
  },
)
ChartArea.displayName = "ChartArea"

