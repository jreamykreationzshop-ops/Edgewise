import type { Point } from './garden-store';
export const canAppendPoint=(points:Point[],p:Point)=>points.length===0||Math.hypot(points[points.length-1].x-p.x,points[points.length-1].y-p.y)>12;
export const canClosePolygon=(points:Point[])=>points.length>=3;
function cross(a:Point,b:Point,c:Point){return (b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x)}
export function hasCrossing(points:Point[]){for(let i=0;i<points.length-1;i++)for(let j=i+2;j<points.length-1;j++)if(cross(points[i],points[i+1],points[j])*cross(points[i],points[i+1],points[j+1])<0&&cross(points[j],points[j+1],points[i])*cross(points[j],points[j+1],points[i+1])<0)return true;return false}
