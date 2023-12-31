function update_Pre(ins){
}
function update_Post(ins){
	ins.script_local.invokeFunction("update_pilotSeat", ins.riddenByEntities[0],ins);
}
function Model_rendering(ins){
}
var GLList_IndPitch = -1;
var GLList_IndYaw = -1;
function GUI_rendering_3D(ins,vehicle){
	GL11 = org.lwjgl.opengl.GL11;
		GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT);
	zdepth = 0.6;
	baselogic = vehicle.getBaseLogic();


	GL11.glPushMatrix();//コンパス
		Vector3d = javax.vecmath.Vector3d;
		ins.rotationToVehicleNose(vehicle);
		GL11.glDisable(GL11.GL_TEXTURE_2D);
		GL11.glBlendFunc(770, 771);
		GL11.glColor4f(0.0, 1.0, 0.0, 0.4);
		GL11.glDepthMask(true);
		GL11.glTranslatef(0,0.1,0);
		GUI_HUD_Cut(0.05,0.1);
		GL11.glTranslatef(0,-0.08,0);



		GL11.glLineWidth(2);

		GL11.glPushMatrix();
			GL11.glBegin(GL11.GL_LINE_LOOP);
				GL11.glVertex3d(0.001   ,0.105,zdepth);
				GL11.glVertex3d(0	   ,0.095,zdepth);
				GL11.glVertex3d(0	   ,0.095,zdepth);
				GL11.glVertex3d(-0.001  ,0.105,zdepth);
			GL11.glEnd();
			GL11.glTranslatef(0,0,0.4);
			GL11.glRotatef(baselogic.bodyrotationYaw,0,1,0);
			GL11.glTranslatef(0,0,-0.4);

			if(GLList_IndYaw == -1){
				GLList_IndYaw = Packages.net.minecraft.client.renderer.GLAllocation.func_74526_a(1);
				GL11.glNewList(GLList_IndYaw, GL11.GL_COMPILE);
				for(i = 0; i < 36;i ++){
					GL11.glBegin(GL11.GL_LINE_LOOP);
						GL11.glVertex3d(0,0.08,zdepth);
						GL11.glVertex3d(0,0.09,zdepth);
					GL11.glEnd();
					if((i)%3 == 0){
						GL11.glPushMatrix();
							GL11.glEnable(GL11.GL_TEXTURE_2D);
							GL11.glTranslatef(0,0.07,zdepth);
							GL11.glScalef(-0.001,-0.001,0.001);
							GL11.glTranslatef(-ins.renderFont_getWidth((i))/2,-4.5,zdepth);
							ins.renderFont((i),0x00FF00,false);
							GL11.glColor4f(0.0, 1.0, 0.0, 0.4);
							GL11.glDisable(GL11.GL_TEXTURE_2D);
						GL11.glPopMatrix();
					}
					GL11.glTranslatef(0,0,0.4);
					GL11.glRotatef(-10,0,1,0);
					GL11.glTranslatef(0,0,-0.4);
				}

				GL11.glEndList();
			}else {
				GL11.glCallList(GLList_IndYaw)
			}
		GL11.glPopMatrix();

		GL11.glEnable(GL11.GL_TEXTURE_2D);
		GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT);
		GL11.glDepthMask(false);
	GL11.glPopMatrix();

	GL11.glPushMatrix();
		Vector3d = javax.vecmath.Vector3d;
//		importClass(Packages.handmadeguns.event.HMGEventZoom);
		ins.rotationToVehicleNose(vehicle);
		GL11.glDisable(GL11.GL_TEXTURE_2D);
		GL11.glBlendFunc(770, 771);
		GL11.glColor4f(0.0, 1.0, 0.0, 0.4);
		GL11.glDepthMask(true);
		GUI_HUD_Cut(0.3,0.3);



		GL11.glLineWidth(2);

		GL11.glPushMatrix();
			//昇降メーター
			GL11.glBegin(GL11.GL_LINE_LOOP);
				GL11.glVertex3d(-0.085,0,zdepth);
				GL11.glVertex3d(-0.09,0,zdepth);
			GL11.glEnd();
			GL11.glTranslatef(0,-0.1,0);
			for(i = 0;i < 11;i++){
				GL11.glBegin(GL11.GL_LINE_LOOP);
					GL11.glVertex3d(-0.10,0,zdepth);
					GL11.glVertex3d(-0.09,0,zdepth);
				GL11.glEnd();
				GL11.glTranslatef(0,0.02,0);
			}
		GL11.glPopMatrix();
		GL11.glPushMatrix();
			//昇降表示
			motionvec = baselogic.motionvec;
			if(motionvec.y > 0.1){
				GL11.glTranslatef(0,0.1,0);
			}else if(motionvec.y < -0.1){
				GL11.glTranslatef(0,-0.1,0);
			}else{
				GL11.glTranslatef(0,(motionvec.y),0);
			}
			GL11.glBegin(GL11.GL_LINE_LOOP);
				GL11.glVertex3d(-0.10 ,0	,zdepth);
				GL11.glVertex3d(-0.11,0.01 ,zdepth);
			GL11.glEnd();
			GL11.glBegin(GL11.GL_LINE_LOOP);
				GL11.glVertex3d(-0.10,0	,zdepth);
				GL11.glVertex3d(-0.11,-0.01,zdepth);
			GL11.glEnd();
		GL11.glPopMatrix();

		GL11.glPushMatrix();
			GL11.glPopMatrix();
			GL11.glPushMatrix();
			GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT);
			GL11.glDisable(GL11.GL_TEXTURE_2D);
			GL11.glBlendFunc(770, 771);
			GL11.glColor4f(0.0, 1.0, 0.0, 0.4);
			GL11.glDepthMask(true);
			
			GUI_HUD_Cut(0.1,0.1);
			GL11.glRotatef(-baselogic.bodyrotationRoll,0,0,1);
			GL11.glRotatef(-baselogic.bodyrotationPitch,1,0,0);
			GL11.glRotatef(-90,1,0,0);
			GL11.glDisable(GL11.GL_TEXTURE_2D);
			if(GLList_IndPitch == -1){
				GLList_IndPitch = Packages.net.minecraft.client.renderer.GLAllocation.func_74526_a(1);
				GL11.glNewList(GLList_IndPitch, GL11.GL_COMPILE);
				for(i = -18; i <= 19;i ++){
					if((i)%6 == 0 && i != 0){
						GL11.glPushMatrix();
							GL11.glEnable(GL11.GL_TEXTURE_2D);
							GL11.glTranslatef(0,0,zdepth);
							GL11.glScalef(-0.001,-0.001,0.001);
							GL11.glTranslatef(-ins.renderFont_getWidth(Math.abs(i + 1)*10)/2,-4.5,zdepth);
							ins.renderFont(-(i)*5,0x00FF00,false);
							GL11.glColor4f(0.0, 1.0, 0.0, 0.4);
							GL11.glDisable(GL11.GL_TEXTURE_2D);
						GL11.glPopMatrix();
					}else{
						GL11.glBegin(GL11.GL_LINE_LOOP);
							if(i == 0){
								GL11.glVertex3d(0.07 ,0,zdepth);
								GL11.glVertex3d(-0.07,0,zdepth);
							}else{
								GL11.glVertex3d(0.05 ,0,zdepth);
								GL11.glVertex3d(-0.05,0,zdepth);
							}
						GL11.glEnd();
					}
					GL11.glRotatef(5,1,0,0);
				}
				GL11.glEndList();
			}else{
				GL11.glCallList(GLList_IndPitch)
			}
		
		GL11.glPopMatrix();

		GL11.glEnable(GL11.GL_TEXTURE_2D);
		GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT);
		GL11.glDepthMask(false);
        GL11.glDepthFunc(GL11.GL_LEQUAL);
	GL11.glPopMatrix();
	return false;
}
function GUI_HUD_Cut(width,height){
	GL11.glEnable(GL11.GL_CULL_FACE);
	GL11.glDepthMask(true);
	GL11.glDepthFunc(GL11.GL_ALWAYS);
	GL11.glColorMask(false,false,false,false);
	GL11.glBegin(GL11.GL_POLYGON);
		GL11.glVertex3d( width,  height, 0.5);
		GL11.glVertex3d( width, -height, 0.5);
		GL11.glVertex3d(-width, -height, 0.5);
		GL11.glVertex3d(-width,  height, 0.5);
	GL11.glEnd();
	GL11.glColorMask(true,true,true,true);
	GL11.glDepthFunc(GL11.GL_GREATER);
}
function GUI_rendering_2D(ins,vehicle,width,height){

	return false;
}
function GUI_rendering_HUD(ins,vehicle,width,height){
	return true;
}

function ModelUpdate_Pre(insRender,insParts){
	RenderVehicle = Packages.handmadevehicle.render.RenderVehicle;
	if(insParts.partsID == 9)RenderVehicle.currentBaseLogic.script_local.invokeFunction("LWing",insRender,insParts);
	if(insParts.partsID == 10)RenderVehicle.currentBaseLogic.script_local.invokeFunction("RWing",insRender,insParts);
	if(insParts.partsID == 14)RenderVehicle.currentBaseLogic.script_local.invokeFunction("Canopy",insRender,insParts);
	return false;
}

function ModelUpdate_Post(insRender,insParts){
}